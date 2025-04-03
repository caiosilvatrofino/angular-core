package auto_app.auto_app.repository;

import auto_app.auto_app.domain.Carro;
import auto_app.auto_app.domain.Marca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {


    public List<Carro> findByNome(String nome);

    public List<Carro> findByMarca(Marca marca);

    @Query("SELECT c FROM Carro c WHERE c.ano > :ano")
    public List<Carro> findAcimaAno(int ano);
}
