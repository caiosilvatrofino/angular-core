package auto_app.auto_app.controller;

import auto_app.auto_app.domain.Carro;
import auto_app.auto_app.service.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/carro")
@CrossOrigin("http://localhost:4200")
public class CarroController {

    @Autowired
    private CarroService carroSvc;


    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Carro car){
        try{
            String message = this.carroSvc.save(car);
            return new ResponseEntity<>(message, HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao salvar carro: " + e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@RequestBody Carro car,@PathVariable long id) {
        try{
            String message = this.carroSvc.update(car, id);
            return new ResponseEntity<>(message, HttpStatus.CREATED);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable long id) {
        try{
            String message = this.carroSvc.delete(id);
            return new ResponseEntity<>(message, HttpStatus.CREATED);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<List<Carro>> findAllCars(){
        try{
            List<Carro> result = this.carroSvc.findAllCars();
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Carro> findById(@PathVariable long id){
        try{
            Carro result = this.carroSvc.findById(id);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findByNome")
    public ResponseEntity<List<Carro>> findByNome(@RequestParam String nome){
        try{
            List<Carro> result = this.carroSvc.findByNome(nome);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findByMarca")
    public ResponseEntity<List<Carro>> findByMarca(@RequestParam long idMarca){
        try{
            List<Carro> result = this.carroSvc.findByMarca(idMarca);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/findByAno")
    public ResponseEntity<List<Carro>> findAcimaAno(@RequestParam int ano){
        try{
            List<Carro> result = this.carroSvc.findAcimaAno(ano);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch(Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

}
