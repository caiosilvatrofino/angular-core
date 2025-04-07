package auto_app.auto_app.service;


import auto_app.auto_app.domain.Carro;
import auto_app.auto_app.domain.Marca;
import auto_app.auto_app.repository.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarroService {

    @Autowired
    private CarroRepository carroRepository;


    public String save(Carro car){
        if (car.getId() != null && car.getId() == 0) {
            car.setId(null);
        }
        this.carroRepository.save(car);
        return "Car saved with success!";
    }

    public String update(Carro car, long id) {
        car.setId(id);
        this.carroRepository.save(car);
        return "Car saved with success!";
    }


    public String delete(long id) {
        this.carroRepository.deleteById(id);
        return "Car deleted with success";
    }

    public List<Carro> findAllCars(){
        return this.carroRepository.findAll();
    }

    public Carro findById(long id){
        Optional<Carro> result = this.carroRepository.findById(id);

        return result.orElse(null);
    }

    public List<Carro> findByNome(String nome) {
        return this.carroRepository.findByNome(nome);
    }

    public List<Carro> findByMarca(long idMarca) {
        Marca marca = new Marca();
        marca.setId(idMarca);
        return this.carroRepository.findByMarca(marca);
    }

    public List<Carro> findAcimaAno(int ano) {
        return this.carroRepository.findAcimaAno(ano);
    }
}
